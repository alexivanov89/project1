import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useClick } from '../../hooks/useClick';
import { useConfirm } from '../../hooks/useConfirm';
import { useFullscreen } from '../../hooks/useFullscreen';
import { useInput } from '../../hooks/useInput';
import { useNetwork } from '../../hooks/useNetwork';
import { usePreventLeave } from '../../hooks/usePreventLeave';
import { useScroll } from '../../hooks/useScroll';
import { useTitle } from '../../hooks/useTitle';
import { fetchPostsAsync } from '../../store/reducers/postsReducer';
import s from './_index.module.scss';

export default function App() {
  const titleUpdater = useTitle('Загрузка...');
  setTimeout(() => titleUpdater('Главная страница'), 3000);
  const { enablePrevent, disablePrevent } = usePreventLeave();

  const handleChange = (online: boolean) => {
    console.log(online ? 'Мы в сети' : 'Не в сети');
  };

  useNetwork(handleChange);
  const { x, y } = useScroll();
  const { element, triggerFull, exitFull } = useFullscreen(() => console.log('test'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

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
        <Button
          onClick={useConfirm(
            'Вы уверены?',
            () => console.log('Удалили'),
            () => console.log('Отменили'),
          )}
          variant="outlined"
        >
          Hello world!
        </Button>
        <Button onClick={enablePrevent}>protect</Button>
        <Button onClick={disablePrevent}>unprotect</Button>
      </header>
      <input {...useInput('Имя')} />
      <input {...useInput()} />
      <p ref={useClick(() => console.log('Click.'))}>Кликни!</p>
      <p>{useNetwork(handleChange) ? 'Онлайн' : 'Оффлайн'}</p>
      <p>{`x= ${x}, y=${y}`}</p>
      <div style={{ height: '100vh' }}></div>
      <div ref={element}>
        <p>Full</p>
        <button onClick={exitFull}>exit</button>
      </div>
      <button onClick={triggerFull}>fullscreen</button>
    </div>
  );
}
