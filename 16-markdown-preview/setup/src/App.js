import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');

  // const onChange = (e) => {
  //   setMarkdown(e.target.value);
  // };

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          // onChange={onChange}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;

/*
> Here is a quote by someone famous
#### Hello world
**Hello** *there*
- first
- second
- third
1. first
2. second
3. third
```
alert()
```
[google](https://www.google.com)
*/