import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import { Row, Col, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function Search({ dataItems, showDropDown }) {
  const dataItemToSearchIn = dataItems;
  const [showDropDownContainer, setShowDropDownContainer] = useState(true);
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    const filteredBooks = Array.isArray(dataItemToSearchIn)
      ? dataItemToSearchIn.filter((book) => {
          // Check if any field contains the search value
          return Object.values(book).some(
            (field) =>
              typeof field === "string" &&
              field.toLowerCase().includes(value.toLowerCase())
          );
        })
      : [];
    setSearchResult(filteredBooks);
  }, [dataItemToSearchIn, value]);
  useEffect(() => {
    setShowDropDownContainer(showDropDown);
  }, [showDropDown]);

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setdisplay(inputValue.trim() !== "");
    // Add or remove the fade-in class based on the input value
    const container = document.querySelector(".search-dropdown");
    console.log(container);
    if (container) {
      if (inputValue.trim() !== "") {
        container.classList.add("fade-in");
      } else {
        container.classList.remove("fade-in");
      }
    }
  };
  const handleSearch = () => {
    // console.log("Search term:", value);
  };

  return (
    <>
      <div>
        <Container>
          <InputGroup className="search-Input-group" size="lg">
            <Form.Control
              value={value}
              onChange={handleOnChange}
              placeholder="Search..."
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
            <InputGroup.Text id="inputGroup-sizing-lg">
              <Button variant="outline-primary" onClick={handleSearch}>
                <FaSearch />
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Container>

        {searchResult && showDropDownContainer && display ? (
          <Container
            className="search-dropdown mt-2  col-md-6"
            style={
              {
                // marginRight: "100px",
              }
            }
          >
            <Col
              className="border border-secondary p-2 dropdown-col  "
              style={{ borderRadius: "10px" }}
            >
              {searchResult && searchResult.length > 0 ? (
                <div>
                  {searchResult.map((book) => (
                    <Col
                      key={book.BookID}
                      className="border custom-title"
                      style={{
                        marginTop: "1px",
                        // borderRadius: "0px 8px",
                      }}
                    >
                      <div>
                        <Container>
                          <Row
                            style={{ marginTop: "-6px", marginBottom: "-6px" }}
                          >
                            <Col>
                              <img
                                src="/images/leiada-krozjhen-AbcSYWxnzGo-unsplash.jpg"
                                height={39}
                                alt=""
                              />
                            </Col>
                            <Col sm={10}>
                              <div
                                style={{ marginTop: "0px", fontSize: "16px" }}
                              >
                                <strong>{book.Title}</strong>
                              </div>
                              <div
                                style={{ marginTop: "-1px", fontSize: "13px" }}
                              >
                                {book.Description}
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </Col>
                  ))}
                </div>
              ) : (
                "No match found"
              )}
            </Col>
          </Container>
        ) : null}
      </div>
    </>
  );
}

export default Search;
