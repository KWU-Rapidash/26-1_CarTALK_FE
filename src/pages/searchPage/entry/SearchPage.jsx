import React, { useState } from 'react';
import './SearchPage.css';
import { IoSearchOutline } from 'react-icons/io5';

const SearchPage = () => {
  
  const [searchTerm, setSearchTerm] = useState('123'); 

  // 와이어프레임 결과창 (추후 백엔드 연동)
  const mockResults = [
    { id: 1, carNumber: '123가 4567', nickname: '닉네임 | 차종', status: '인증된 회원', verified: true },
    { id: 2, carNumber: '123나 8910', nickname: '닉네임 | 차종', status: '인증되지 않은 회원', verified: false },
    { id: 3, carNumber: '123다 1029', nickname: '닉네임 | 차종', status: '인증된 회원', verified: true },
  ];

  return (
    <div className="search-page-container">
      
      <div className="search-bar-section">
        <div className="search-input-wrapper">
          <IoSearchOutline className="search-input-icon" />
          <input 
            type="text" 
            className="search-input" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <button className="search-button">검색</button>
        <span className="result-count">검색 결과 **{mockResults.length}**건</span>
      </div>

      
      <div className="result-list-section">
        {mockResults.map((result) => (
          <div key={result.id} className="result-card">
            <div className="result-car-icon-placeholder"></div> 
            <div className="result-info">
              <div className="result-car-number">{result.carNumber}</div>
              <div className="result-nickname">{result.nickname}</div>
            </div>
            
            <div className={`status-tag ${result.verified ? 'verified' : 'unverified'}`}>
              {result.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;