import Highlight, { defaultProps, Language } from "prism-react-renderer";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";

const Test: React.FC<{ className: string; children: string }> = ({
  children,
  className,
}) => {
  const language = className.replace(/language-/, "") as Language;

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={oceanicNext}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="text-sm p-5 mb-4 -mx-4 overflow-x-auto sm:-mx-6 sm:rounded-md"
          style={{ ...style }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Test;
