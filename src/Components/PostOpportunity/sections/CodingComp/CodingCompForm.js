import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, Col } from 'react-bootstrap';
import styles from '../../../../CSS/CodingCompForm.module.css';

class CodingCompForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      title: '',
      url: '',
      date: '',
      description: '',
      location: '',
      eligibility: '',
      deadline: '',
      image: '',
      onlyForFemale: false
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('From handleSubmit', this.state.title);
    axios
      .post(
        'https://opportunity-calendar.herokuapp.com/opportunity',
        {
          opportunityTitle: this.state.title,
          opportunityType: this.state.type,
          opportunityURL: this.state.url,
          opportunityDate: this.state.date,
          opportunityDescription: this.state.description,
          opportunityLocation: this.state.location,
          opportunityEligibility: this.state.eligibility,
          opportunityRegistrationDeadline: this.state.deadline,
          organisationLogoURL: this.state.image,
          onlyForFemale: this.state.onlyForFemale,
        }
      )
      .then(
        (res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data });
        },
        (error) => {
          console.log(error);
        }
      );
    this.setState({
      type: '',
      title: '',
      url: '',
      date: '',
      description: '',
      location: '',
      eligibility: '',
      deadline: '',
      image: '',
      onlyForFemale: ''
    });
  };

  render() {
    const {
      title,
      url,
      date,
      description,
      location,
      eligibility,
      deadline,
      image,
    } = this.state;

    return (
      <div style={{ marginBottom: '80px' }}>
        <Form onSubmit={this.handleSubmit}>
          <Card className={styles.Card}>
            <Card.Header as="h5">
              {' '}
              <Form.Label className={styles.CardTitle}>
                Post a Coding Competition
              </Form.Label>
            </Card.Header>

            <Card.Body>
              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Coding Competition Name"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Control
                    as="select"
                    size="lg"
                    defaultValue="Type"
                    onChange={this.handleChange}
                    style={{ marginTop: '30px' }}
                  >
                    <option defaultValue hidden>Opportunity type</option>
                    <option value="Job">Job</option>
                    <option value="Internship">Internship</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Scholarship">Scholarship</option>
                    <option value="Conference">Conferencne</option>
                    <option value="Coding Competition">Coding Competition</option>
                  </Form.Control>
                </Form.Group>

                <div style={{ fontSize: 12, color: 'red', marginLeft: '40px' }}>
                  {this.state.FieldEmptyError}
                </div>

                <Form.Group as={Col} controlId="formGridType">
                  <Form.Check
                    type="checkbox"
                    size="md"
                    label="Only for female"
                    style={{ marginTop: '40px' }}
                    onChange={(event) => this.setState({ onlyForFemale: event.target.checked })}
                  />
                </Form.Group>
              </Form.Row>


              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="image"
                  value={image}
                  placeholder="Logo URL"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={4}
                  style={{ marginTop: '30px' }}
                  name="description"
                  value={description}
                  placeholder="Short Description"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="date"
                  value={date}
                  placeholder="Date of Competition"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="location"
                  value={location}
                  placeholder="Location"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="deadline"
                  value={deadline}
                  placeholder="Last Date to Apply"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="eligibility"
                  value={eligibility}
                  placeholder="Eligibility"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="url"
                  value={url}
                  placeholder="Website"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Button className={styles.Button} type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </div>
    );
  }
}

export default CodingCompForm;
