import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { REMOVE_FROM_CART } from '../utils/mutations';
import { removeItemId } from '../utils/localStorage';
import {useQuery, useMutation} from '@apollo/client';
import {GET_ME} from '../utils/queries';


const Inventory = () => {
  const {loading, data} = useQuery(GET_ME);
  const userData = data?.me || [];
  const [removeItem, {error}] = useMutation(REMOVE_FROM_CART);
  console.log(userData);
  if (error) {
    console.log(JSON.stringify(error.message));
  }

  
  const handleDeleteItem = async (itemId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeItem({
        variables: {id: itemId}
      });

     
      removeItemId(itemId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved items!</h1>
        </Container>
      </Jumbotron>
      <Container>
        {/* <h2>
          {userData.savedCart.length
            ? `Viewing saved inventory:`
            : 'You have no saved inventory!'}
        </h2> */}
        <CardColumns>
          {userData.savedCart.map((item) => {
            return (
              <Card key={item.id} border='dark'>
                {item.image ? <Card.Img src={item.image} alt={`The cover for ${item.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteItem(item.id)}>
                    Delete this Item!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Inventory;