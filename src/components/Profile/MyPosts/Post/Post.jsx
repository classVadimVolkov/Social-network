import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX///8AoZ3/s0QztLEkrqvX8PD/tkv/zIKb2tn8/v7u+fj/2aP/+O7/wWb/+fH/15z/u1j/uFH/2J7/3Kr/8Nv/6cn/7dLQ7u1zy8lAubaB0c+Q1tROvrsSqKT/5b7/0Iz/0pH/4LP/9OT/yHn/w2yt4d/E6ehdw8F1zMq65uThKGTmAAACR0lEQVR4nO2Zi3KCMBBFIfJG8A1WAd9i//8HCy1TLRICbDZMZ/b8wLmT3WwW1TSCIAiCIAiCGM40Wx5s++Bn01HsfsB+CVahYn14tNgfrJnSCJsFe2O+UeefvetLfFX+Q7OfsaMa/5HnZ2ymwn/i+xnL8P1nqy3AAn8kXNr8jNnY/qjdz9gaOYAtCnDA9YetHVBi4QbIRH7GcAcidwY9wZ0FV3GAC2qAhkeozhw1gLAHi1mEGkDsR74GHU4AtwRzcYAANYDgJSjBfQ2W4gAr1ADCtwj9NRI2AW4PdqgBbgXEz+EC/fPAbw9wwvZrWtDmv+L7W7dSBTtpQcRNYEUq/MWXISfBQpFf09aN0yDAXohfCBs+z45qfyJY1/Zz+6xUXzJdXapesC6rUX6kKThHm000lrzA9cw4Nj1vDLd32yaGXpF+5I6p0m7uJvobRn5XY3dvH+/2KsMOvxquY/D038V4IEe4N5x9LcLexdN7uUhfMomx/HHr6b+wx/HvO+oLcowy7Lr7izJI70W3U/kRE2z7+aUn6HX+VQKZfeD09xedKM9vpkMC6I4svyscfxxkTaQBDfCDpDYwh/plFSEZHiCVcRfvw/26vpMQAHAAUo4A0AEl8IfxAQtgQP1u1x2AB3QWfAL9+hYYoPcrWAdag6FT+AnsHnhgv34DBQC3ALQJeiyiPBJQAHAPQrsQNIcrQAG436E9AC0F8FsIvIfQQVwC+umCAlAACkABKAAFoAASNqIUtJB4+QRIouhfBIIgCIIgCOL/8gWcVCR27T34MAAAAABJRU5ErkJggg=="/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCounter}
            </div>
        </div>
    )
}

export default Post