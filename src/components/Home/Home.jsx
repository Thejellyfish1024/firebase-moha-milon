import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {

    const {createUser} = useContext(AuthContext);
    console.log(createUser);

    return (
        <div>
            This is home
        </div>
    );
};

export default Home;