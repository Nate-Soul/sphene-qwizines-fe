import { gql } from "@apollo/client";

const SAMPLE_QUERY = gql`
    {
        menus: {
            name
            price
        }
    }
`

export { SAMPLE_QUERY, } 