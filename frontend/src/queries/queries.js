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
`

export { addUsersMutation };