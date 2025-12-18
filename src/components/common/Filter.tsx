import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface FilterProps {
    genres: Option[];
    years: Option[];
    selectedGenre: string;
    selectedYear: string;
    onGenreChange: (value: string) => void;
    onYearChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({
    genres,
    years,
    selectedGenre,
    selectedYear,
    onGenreChange,
    onYearChange,
}) => {
    return (
        <div className="catalog__nav">
            <div className="catalog__select-wrap">
                <select
                    className="catalog__select"
                    name="genres"
                    value={selectedGenre}
                    onChange={(e) => onGenreChange(e.target.value)}
                >
                    {genres.map((g, idx) => (
                        <option key={idx} value={g.value}>
                            {g.label}
                        </option>
                    ))}
                </select>

                <select
                    className="catalog__select"
                    name="years"
                    value={selectedYear}
                    onChange={(e) => onYearChange(e.target.value)}
                >
                    {years.map((y, idx) => (
                        <option key={idx} value={y.value}>
                            {y.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
