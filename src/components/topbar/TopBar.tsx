import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="grid grid-cols-[0.8fr_2fr_1fr_1fr_1fr_1fr_1fr_1.5fr_0.5fr] bg-white shadow rounded-lg py-2 px-5 text-sm text-[var(--text-secondary)] border border-[var(--border)] my-5">
            <span className="font-semibold">QS Ranking</span>
            <span className="font-semibold">Business School / University</span>
            <span className="font-semibold">Avg GMAT</span>
            <span className="font-semibold">Class size</span>
            <span className="font-semibold">Accept rate</span>
            <span className="font-semibold">Fee</span>
            <span className="font-semibold">Deadline</span>
            <span className="font-semibold">Tags</span>
            <span className="font-semibold">Link</span>
        </div>
    );
};

export default TopBar;
