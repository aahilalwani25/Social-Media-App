import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../MVC/View/User/ViewPost";
import CreatePost from "../MVC/View/User/CreatePost";
import iconSet from "@expo/vector-icons/build/Fontisto";

const Drawer= createDrawerNavigator();

export default function NavigationDrawer({userData}){

    return(

        <Drawer.Navigator //drawerContent={}
        
        >
            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon:({color, size,focused})=>{
                    <iconSet.Button name="home" size={size} color={color}/>
                },
                
            }}/>
            <Drawer.Screen name="Create Post" component={CreatePost}/>
        </Drawer.Navigator>
    );
}