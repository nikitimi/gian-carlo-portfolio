import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <p className="flex flex-col text-center">
                <span className="text-yellow-300">⚠ Men at work ⚠</span>
                Upgrades coming soon
            </p>
            <p className="delay-1 animate-loading">.</p>
            <p className="delay-2 animate-loading">.</p>
            <p className="delay-3 animate-loading">.</p>
        </div>
    )
}

export default Loading
