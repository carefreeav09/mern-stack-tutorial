import {gql} from 'apollo-boost';

const addUsersMutation = gql`
    mutation($name : String, $username: String, $password : String, $email : String) {
        addUser(
            name : $name,
            username: $username,
            password : $password,
            email : $email,
        ){
            name,
            username,
        }
    }
`;

const loginMutation = gql`
    mutation($username: String!, $password: String!){
        login(
            username: $username,
            password: $password
        )
        {
            username,
            name,
            email
        }
        
    }
`

const getUsersList = gql`
    {
        users {
            name,
            username,
            password
        }
    }
`
export { addUsersMutation, loginMutation, getUsersList};