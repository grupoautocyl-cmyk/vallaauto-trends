import React from 'react';
import './KeywordTable.css'; // Optional: Include your styling for the table

const KeywordTable = ({ keywords }) => {
    return (
        <div className="table-responsive">
            <table className="keyword-table">
                <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>Search Volume</th>
                        <th>Keyword Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {keywords.map((keyword, index) => (
                        <tr key={index}>
                            <td>{keyword.name}</td>
                            <td>{keyword.volume}</td>
                            <td>{keyword.difficulty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default KeywordTable;