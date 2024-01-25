import React, { useState } from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";
import { GiCancel } from "react-icons/gi";

function Filter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filterCategories = [
    "Action",
    "African Literature",
    "Christian literature",
    "Crime",
    "love",
    "History",
    "Theology",
    " Theatre",
    "Environment",
    "Feminism",
    "Culture",
    "Philosophy",
    "Mystery",
    "Politics",
    "Poetry",
    "Relationships",
    "Espionage",
    "Fantasy",
    "Spanish Literature",
    "Black Female Authors",
    "Sexuality",
    "Retellings",
    "Short Stories",
  ];

  const handleFilterSelection = (event) => {
    const filterValue = event.target.value;
    if (selectedFilters.includes(filterValue)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== filterValue)
      );
    } else {
      setSelectedFilters([...selectedFilters, filterValue]);
    }
  };

  const handleRemoveFilter = (filter) => {
    setSelectedFilters(
      selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
    );
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>More filters...</Card.Title>
      </Card.Header>
      <Card.Body>
        {selectedFilters.length > 0 && (
          <div>
            {selectedFilters.map((selectedFilter, index) => (
              <InputGroup key={index}>
                <InputGroup.Text>
                  <GiCancel
                    size={20}
                    style={{
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemoveFilter(selectedFilter)}
                  />
                </InputGroup.Text>
                <FormControl disabled value={selectedFilter} />
              </InputGroup>
            ))}
            <hr />
          </div>
        )}
        {filterCategories.map((filterCategory) => {
          return (
            <InputGroup className="mb-3">
              <InputGroup.Checkbox
                onClick={handleFilterSelection}
                value={filterCategory}
              />
              <FormControl disabled placeholder={filterCategory} />
            </InputGroup>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Filter;
