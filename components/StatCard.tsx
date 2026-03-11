import React from 'react';

interface StatCardProps {
    title: string;
    value: number | string;
    percentageChange: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentageChange }) => {
    return (
        <div className="stat-card">
            <h2>{title}</h2>
            <p>{value}</p>
            <span className={percentageChange >= 0 ? 'positive' : 'negative'}>
                {percentageChange >= 0 ? '+' : ''}{percentageChange}%
            </span>
        </div>
    );
};

export default StatCard;