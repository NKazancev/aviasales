import { ISortButton } from 'models/sort';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setSortButton } from 'store/slices/sortSlice';

import * as classes from './Tabs.module.css';

export default function Tabs() {
  const dispatch = useAppDispatch();
  const { buttons } = useAppSelector((state) => state.sortSlice);

  const activeButton = `${classes.button} ${classes.active}`;

  const sortButtonsList = buttons.map((button: ISortButton) => {
    return (
      <li key={button.id} className={classes.item}>
        <button
          type="button"
          className={!button.active ? classes.button : activeButton}
          onClick={() => dispatch(setSortButton(button.id))}
        >
          {button.text}
        </button>
      </li>
    );
  });

  return <ul className={classes.list}>{sortButtonsList}</ul>;
}
