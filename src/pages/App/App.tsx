import Button from '@mui/material/Button';
import s from './_index.module.scss';

export default function App() {
  return (
    <div className={s.App}>
      <header className={s.Appheader}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={s.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="outlined">Hello world!</Button>
      </header>
    </div>
  );
}
