import React from 'react'

export default function Slider({ onChange }) {
    const [value, setValue] = React.useState(1)

    return (
        <React.Fragment>
            {value}
            <input
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => {
                    const value = Number(e.target.value)
                    onChange(value)
                    setValue(value)
                }}
            />
        </React.Fragment>
    )
}