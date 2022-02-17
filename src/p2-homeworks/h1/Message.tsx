import React from 'react';
import s from './Message.module.css'

export type messagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: messagePropsType) {
  return (
    <div className={s.item}>

      <div className={s.avatar}>
        <img alt={'avatar'} src={props.avatar}/>
      </div>

      <div className={s.dialog}>
        <div className={s.message_panel}>
          <div className={s.name}>{props.name}</div>
          <div className={s.message}>{props.message}</div>
        </div>
        <div className={s.time}>
          {props.time}
        </div>
      </div>
    </div>
  )
}

export default Message;
