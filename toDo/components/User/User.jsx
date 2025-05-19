import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function User() {
    // const [user, setUser] = useState("John Doe");
    // const [userImg, setUserImg] = useState("./");
    // const [notificationImg, setNotificationImg] = useState([]);

    const user = "John Doe";
    const userImg = "../../assets/images/user.png";
    const notificationImg = [];

    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <View style={styles.container}>
            <Image style={styles.userImg} source={require(userImg)} />

            <View style={styles.userContainer}>
                <Text style={styles.user}>{user}</Text>
                <Text style={styles.welcome}>Morning, {user.split(" ")[0]}</Text>
            </View>

            <View style={styles.notificationContainer}>
                <TouchableOpacity onPress={() => setShowNotifications(!showNotifications)}>
                    <Image
                        style={styles.notificationImg}
                        source={require("../../assets/images/notification.png")}
                    />
                </TouchableOpacity>
                {showNotifications && (
                    <View>
                        {notificationImg.length === 0 ? (
                            <Text>No notifications</Text>
                        ) : (
                            notificationImg.map((img, idx) => (
                                <Image key={idx} source={{ uri: img }} style={styles.userImg} />
                            ))
                        )}
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        height: 73,
    },
    userImg: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 16,
    },
    userContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    user: {
        fontSize: 20,
        color: "#000",
    },
    welcome: {
        fontSize: 16,
        fontWeight: "200",
        color: "#000",
    },
    notificationContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 16,
    },
    notificationImg: {
        width: 23,
        height: 23,
    },
});
