import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../icon/tabBarIcon';
import ChildProfile from '../screens/childprofile';
import Calendar from '../screens/calendar';
import Parent from '../screens/parent';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Child"
                component={ChildProfile}
                options={{
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="child" />,
                }}
                />
                <BottomTab.Screen
                name="Parent"
                component={Parent}
                options={{
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="person" />,
                }}
                />
                <BottomTab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="calendar" />,
                }}
                />
        </BottomTab.Navigator>
    )
}