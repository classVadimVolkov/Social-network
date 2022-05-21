import React from "react";
import style from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        let idUserCounter = 1;
        props.setUsers(
            [
                {
                    id: idUserCounter++,
                    photoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX///8AoZ3/s0QztLEkrqvX8PD/tkv/zIKb2tn8/v7u+fj/2aP/+O7/wWb/+fH/15z/u1j/uFH/2J7/3Kr/8Nv/6cn/7dLQ7u1zy8lAubaB0c+Q1tROvrsSqKT/5b7/0Iz/0pH/4LP/9OT/yHn/w2yt4d/E6ehdw8F1zMq65uThKGTmAAACR0lEQVR4nO2Zi3KCMBBFIfJG8A1WAd9i//8HCy1TLRICbDZMZ/b8wLmT3WwW1TSCIAiCIAiCGM40Wx5s++Bn01HsfsB+CVahYn14tNgfrJnSCJsFe2O+UeefvetLfFX+Q7OfsaMa/5HnZ2ymwn/i+xnL8P1nqy3AAn8kXNr8jNnY/qjdz9gaOYAtCnDA9YetHVBi4QbIRH7GcAcidwY9wZ0FV3GAC2qAhkeozhw1gLAHi1mEGkDsR74GHU4AtwRzcYAANYDgJSjBfQ2W4gAr1ADCtwj9NRI2AW4PdqgBbgXEz+EC/fPAbw9wwvZrWtDmv+L7W7dSBTtpQcRNYEUq/MWXISfBQpFf09aN0yDAXohfCBs+z45qfyJY1/Zz+6xUXzJdXapesC6rUX6kKThHm000lrzA9cw4Nj1vDLd32yaGXpF+5I6p0m7uJvobRn5XY3dvH+/2KsMOvxquY/D038V4IEe4N5x9LcLexdN7uUhfMomx/HHr6b+wx/HvO+oLcowy7Lr7izJI70W3U/kRE2z7+aUn6HX+VQKZfeD09xedKM9vpkMC6I4svyscfxxkTaQBDfCDpDYwh/plFSEZHiCVcRfvw/26vpMQAHAAUo4A0AEl8IfxAQtgQP1u1x2AB3QWfAL9+hYYoPcrWAdag6FT+AnsHnhgv34DBQC3ALQJeiyiPBJQAHAPQrsQNIcrQAG436E9AC0F8FsIvIfQQVwC+umCAlAACkABKAAFoAASNqIUtJB4+QRIouhfBIIgCIIgCOL/8gWcVCR27T34MAAAAABJRU5ErkJggg==',
                    followed: false,
                    fullName: 'Vadzim',
                    status: 'Learning React',
                    location: {city: 'Mogilev', country: 'Belarus'}
                },
                {
                    id: idUserCounter++,
                    photoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX///8AoZ3/s0QztLEkrqvX8PD/tkv/zIKb2tn8/v7u+fj/2aP/+O7/wWb/+fH/15z/u1j/uFH/2J7/3Kr/8Nv/6cn/7dLQ7u1zy8lAubaB0c+Q1tROvrsSqKT/5b7/0Iz/0pH/4LP/9OT/yHn/w2yt4d/E6ehdw8F1zMq65uThKGTmAAACR0lEQVR4nO2Zi3KCMBBFIfJG8A1WAd9i//8HCy1TLRICbDZMZ/b8wLmT3WwW1TSCIAiCIAiCGM40Wx5s++Bn01HsfsB+CVahYn14tNgfrJnSCJsFe2O+UeefvetLfFX+Q7OfsaMa/5HnZ2ymwn/i+xnL8P1nqy3AAn8kXNr8jNnY/qjdz9gaOYAtCnDA9YetHVBi4QbIRH7GcAcidwY9wZ0FV3GAC2qAhkeozhw1gLAHi1mEGkDsR74GHU4AtwRzcYAANYDgJSjBfQ2W4gAr1ADCtwj9NRI2AW4PdqgBbgXEz+EC/fPAbw9wwvZrWtDmv+L7W7dSBTtpQcRNYEUq/MWXISfBQpFf09aN0yDAXohfCBs+z45qfyJY1/Zz+6xUXzJdXapesC6rUX6kKThHm000lrzA9cw4Nj1vDLd32yaGXpF+5I6p0m7uJvobRn5XY3dvH+/2KsMOvxquY/D038V4IEe4N5x9LcLexdN7uUhfMomx/HHr6b+wx/HvO+oLcowy7Lr7izJI70W3U/kRE2z7+aUn6HX+VQKZfeD09xedKM9vpkMC6I4svyscfxxkTaQBDfCDpDYwh/plFSEZHiCVcRfvw/26vpMQAHAAUo4A0AEl8IfxAQtgQP1u1x2AB3QWfAL9+hYYoPcrWAdag6FT+AnsHnhgv34DBQC3ALQJeiyiPBJQAHAPQrsQNIcrQAG436E9AC0F8FsIvIfQQVwC+umCAlAACkABKAAFoAASNqIUtJB4+QRIouhfBIIgCIIgCOL/8gWcVCR27T34MAAAAABJRU5ErkJggg==',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'Playing games',
                    location: {city: 'Brest', country: 'Belarus'}
                },
                {
                    id: idUserCounter++,
                    photoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX///8AoZ3/s0QztLEkrqvX8PD/tkv/zIKb2tn8/v7u+fj/2aP/+O7/wWb/+fH/15z/u1j/uFH/2J7/3Kr/8Nv/6cn/7dLQ7u1zy8lAubaB0c+Q1tROvrsSqKT/5b7/0Iz/0pH/4LP/9OT/yHn/w2yt4d/E6ehdw8F1zMq65uThKGTmAAACR0lEQVR4nO2Zi3KCMBBFIfJG8A1WAd9i//8HCy1TLRICbDZMZ/b8wLmT3WwW1TSCIAiCIAiCGM40Wx5s++Bn01HsfsB+CVahYn14tNgfrJnSCJsFe2O+UeefvetLfFX+Q7OfsaMa/5HnZ2ymwn/i+xnL8P1nqy3AAn8kXNr8jNnY/qjdz9gaOYAtCnDA9YetHVBi4QbIRH7GcAcidwY9wZ0FV3GAC2qAhkeozhw1gLAHi1mEGkDsR74GHU4AtwRzcYAANYDgJSjBfQ2W4gAr1ADCtwj9NRI2AW4PdqgBbgXEz+EC/fPAbw9wwvZrWtDmv+L7W7dSBTtpQcRNYEUq/MWXISfBQpFf09aN0yDAXohfCBs+z45qfyJY1/Zz+6xUXzJdXapesC6rUX6kKThHm000lrzA9cw4Nj1vDLd32yaGXpF+5I6p0m7uJvobRn5XY3dvH+/2KsMOvxquY/D038V4IEe4N5x9LcLexdN7uUhfMomx/HHr6b+wx/HvO+oLcowy7Lr7izJI70W3U/kRE2z7+aUn6HX+VQKZfeD09xedKM9vpkMC6I4svyscfxxkTaQBDfCDpDYwh/plFSEZHiCVcRfvw/26vpMQAHAAUo4A0AEl8IfxAQtgQP1u1x2AB3QWfAL9+hYYoPcrWAdag6FT+AnsHnhgv34DBQC3ALQJeiyiPBJQAHAPQrsQNIcrQAG436E9AC0F8FsIvIfQQVwC+umCAlAACkABKAAFoAASNqIUtJB4+QRIouhfBIIgCIIgCOL/8gWcVCR27T34MAAAAABJRU5ErkJggg==',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'Busy',
                    location: {city: 'Liverpool', country: 'England'}
                }
            ]
        )
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={style.item}>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
                </div>
            )}
        </div>
    )
}

export default Users