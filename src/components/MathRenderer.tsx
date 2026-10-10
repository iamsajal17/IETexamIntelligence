import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Split lines to preserve step-by-step layout
  const lines = content.split('\n');

  const renderTextWithMath = (text: string, lineKey: string | number) => {
    const parts: React.ReactNode[] = [];
    // Match $$...$$ or $...$
    const regex = /(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g;

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`${lineKey}-txt-${lastIndex}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }

      const matchedStr = match[0];
      const isDisplay = matchedStr.startsWith('$$') && matchedStr.endsWith('$$');
      const math = isDisplay
        ? matchedStr.slice(2, -2).trim()
        : matchedStr.slice(1, -1).trim();

      try {
        const html = katex.renderToString(math, {
          displayMode: isDisplay,
          throwOnError: false,
          strict: false,
          trust: true,
        });

        parts.push(
          <span
            key={`${lineKey}-math-${match.index}`}
            dangerouslySetInnerHTML={{ __html: html }}
            className={
              isDisplay
                ? 'my-2.5 block overflow-x-auto text-center py-1 font-serif'
                : 'inline-block px-1 align-baseline font-serif'
            }
          />
        );
      } catch (e) {
        parts.push(
          <code
            key={`${lineKey}-fallback-${match.index}`}
            className="text-amber-300 font-mono text-xs px-1 bg-amber-950/40 rounded"
          >
            {matchedStr}
          </code>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(
        <span key={`${lineKey}-txt-${lastIndex}`}>
          {text.substring(lastIndex)}
        </span>
      );
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className={`space-y-1.5 leading-relaxed text-sm ${className}`}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        // Heading formatting (e.g., **Step 1: ...**)
        const isBoldHeader = trimmed.startsWith('**') && trimmed.endsWith('**');
        if (isBoldHeader) {
          const innerText = trimmed.slice(2, -2);
          return (
            <div
              key={idx}
              className="font-bold text-emerald-400 text-xs sm:text-sm mt-3 mb-1 tracking-wide flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{renderTextWithMath(innerText, `hdr-${idx}`)}</span>
            </div>
          );
        }

        return (
          <div key={idx} className="text-slate-200">
            {renderTextWithMath(line, `line-${idx}`)}
          </div>
        );
      })}
    </div>
  );
};
