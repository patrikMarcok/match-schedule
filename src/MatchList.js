// MatchList.js
import React, { useState } from 'react';

function MatchList() {
  const [matches, setMatches] = useState([
    {
        id: 'CV03',
        date: '30.9.2023',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'TJ Slávia Svidník',
      },
      {
        id: 'CV03/2',
        date: '30.9.2023',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'TJ Slávia Svidník',
      },
      {
        id: 'TV03',
        date: '1.10.2023',
        category: 'Kadeti',
        team1: 'VKM Stará ?ubov?a',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV03/2',
        date: '1.10.2023',
        category: 'Kadeti',
        team1: 'VKM Stará ?ubov?a',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV04',
        date: '8.10.2023',
        category: 'Kadeti',
        team1: 'VK Junior 2012 Poprad',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV04/2',
        date: '8.10.2023',
        category: 'Kadeti',
        team1: 'VK Junior 2012 Poprad',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV05',
        date: '14.10.2023',
        category: 'Ziaci',
        team1: 'VK Humenné',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV05/2',
        date: '14.10.2023',
        category: 'Ziaci',
        team1: 'VK Humenné',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M01',
        date: '15.10.2023',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'MŠK Vranov nad Top?ou',
      },
      {
        id: '2M01/2',
        date: '15.10.2023',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'MŠK Vranov nad Top?ou',
      },
      {
        id: 'CV08',
        date: '4.11.2023',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'VKM Stará ?ubov?a',
      },
      {
        id: 'CV08/2',
        date: '4.11.2023',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'VKM Stará ?ubov?a',
      },
      {
        id: '2M06',
        date: '5.11.2023',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'VK MIRAD UNIPO Prešov B',
      },
      {
        id: '2M06/2',
        date: '5.11.2023',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'VK MIRAD UNIPO Prešov B',
      },
      {
        id: 'TV09',
        date: '12.11.2023',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Humenné',
      },
      {
        id: 'TV09/2',
        date: '12.11.2023',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Humenné',
      },
      {
        id: 'CV12',
        date: '18.11.2023',
        category: 'Ziaci',
        team1: 'VK MIRAD UNIPO PREŠOV',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV12/2',
        date: '18.11.2023',
        category: 'Ziaci',
        team1: 'VK MIRAD UNIPO PREŠOV',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M08',
        date: '18.11.2023',
        category: '2. liga',
        team1: 'VK Slávia Sobrance',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M08/2',
        date: '18.11.2023',
        category: '2. liga',
        team1: 'VK Slávia Sobrance',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV11',
        date: '19.11.2023',
        category: 'Kadeti',
        team1: 'VK MIRAD UNIPO Prešov',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV11/2',
        date: '19.11.2023',
        category: 'Kadeti',
        team1: 'VK MIRAD UNIPO Prešov',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV13',
        date: '2.12.2023',
        category: 'Ziaci',
        team1: 'VK Junior 2012 Poprad',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV13/2',
        date: '2.12.2023',
        category: 'Ziaci',
        team1: 'VK Junior 2012 Poprad',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M11',
        date: '3.12.2023',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Strážske',
      },
      {
        id: '2M11/2',
        date: '3.12.2023',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Strážske',
      },
      {
        id: 'TV14',
        date: '10.12.2023',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'TJ Slávia Svidník',
      },
      {
        id: 'TV14/2',
        date: '10.12.2023',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'TJ Slávia Svidník',
      },
      {
        id: 'CV18',
        date: '16.12.2023',
        category: 'Ziaci',
        team1: 'TJ Slávia Svidník',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV18/2',
        date: '16.12.2023',
        category: 'Ziaci',
        team1: 'TJ Slávia Svidník',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M15',
        date: '16.12.2023',
        category: '2. liga',
        team1: 'Beachclub Prešov',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M15/2',
        date: '16.12.2023',
        category: '2. liga',
        team1: 'Beachclub Prešov',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV18',
        date: '14.1.2024',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VKM Stará ?ubov?a',
      },
      {
        id: 'TV18/2',
        date: '14.1.2024',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VKM Stará ?ubov?a',
      },
      {
        id: 'CV20',
        date: '20.1.2024',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Humenné',
      },
      {
        id: 'CV20/2',
        date: '20.1.2024',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Humenné',
      },
      {
        id: 'TV19',
        date: '21.1.2024',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Junior 2012 Poprad',
      },
      {
        id: 'TV19/2',
        date: '21.1.2024',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Junior 2012 Poprad',
      },
      {
        id: '2M16',
        date: '21.1.2024',
        category: '2. liga',
        team1: 'MŠK Vranov nad Top?ou',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M16/2',
        date: '21.1.2024',
        category: '2. liga',
        team1: 'MŠK Vranov nad Top?ou',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV23',
        date: '3.2.2024',
        category: 'Ziaci',
        team1: 'V KM Stará ?ubov?a',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV23/2',
        date: '3.2.2024',
        category: 'Ziaci',
        team1: 'VK MIRAD UNIPO Prešov B',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV24',
        date: '11.2.2024',
        category: 'Kadeti',
        team1: 'VK Humenné',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV24/2',
        date: '11.2.2024',
        category: 'Kadeti',
        team1: 'VK Humenné',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV27',
        date: '17.2.2024',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'VK MIRAD UNIPO PREŠOV',
      },
      {
        id: 'CV27/2',
        date: '17.2.2024',
        category: 'Ziaci',
        team1: 'VK KDS-šport Košice',
        team2: 'VK MIRAD UNIPO PREŠOV',
      },
      {
        id: 'TV26',
        date: '18.2.2024',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VK MIRAD UNIPO Prešov',
      },
      {
        id: 'TV26/2',
        date: '18.2.2024',
        category: 'Kadeti',
        team1: 'VK KDS-šport Košice',
        team2: 'VK MIRAD UNIPO Prešov',
      },
      {
        id: '2M23',
        date: '18.2.2024',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Slávia Sobrance',
      },
      {
        id: '2M23/2',
        date: '18.2.2024',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'VK Slávia Sobrance',
      },
      {
        id: 'CV28',
        date: '16.3.2024',
        category: 'Ziaci',
        team1: 'VK Junior 2012 Poprad',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'CV28/2',
        date: '16.3.2024',
        category: 'Ziaci',
        team1: 'VK Junior 2012 Poprad',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M26',
        date: '16.3.2024',
        category: '2. liga',
        team1: 'VK Strážske',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M26/2',
        date: '16.3.2024',
        category: '2. liga',
        team1: 'VK Strážske',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV29',
        date: '24.3.2024',
        category: 'Kadeti',
        team1: 'TJ Slávia Svidník',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: 'TV29/2',
        date: '24.3.2024',
        category: 'Kadeti',
        team1: 'TJ Slávia Svidník',
        team2: 'VK KDS-šport Košice',
      },
      {
        id: '2M30',
        date: '7.4.2024',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'Beachclub Prešov',
      },
      {
        id: '2M30/2',
        date: '7.4.2024',
        category: '2. liga',
        team1: 'VK KDS-šport Košice',
        team2: 'Beachclub Prešov',
      },
  ]);

  const [newMatch, setNewMatch] = useState({ category: 'Ziaci' });
  const [selectedCategories, setSelectedCategories] = useState(['2. liga', 'Ziaci', 'Kadeti']);

  const addMatch = () => {
    setMatches([...matches, newMatch]);
    setNewMatch({ category: 'Ziaci' }); // Reset form
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    
  };
  const formatDate = (dateString) => {
    const parts = dateString.split('.');
    if (parts.length === 3) {
      const year = parts[2];
      const month = parts[1];
      const day = parts[0];
      return `${day}.${month}.${year}`;
    }
    return dateString;
};

  return (
    <div>
      
      <div>
        {['2. liga', 'Ziaci', 'Kadeti'].map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            {category}
          </label>
        ))}
      </div>


      <hr />

      <table className="match-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Date</th>
            <th>Team 1</th>
            <th>Team 2</th>
          </tr>
        </thead>
        <tbody>
          {matches
            .filter((match) => selectedCategories.includes(match.category))
            .map((match, index) => (
              <tr key={index}>
                <td>{match.category}</td>
                <td>{formatDate(match.date)}</td>
                <td>{match.team1}</td>
                <td>{match.team2}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchList;

