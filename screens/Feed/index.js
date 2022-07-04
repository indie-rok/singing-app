import React, { useEffect, useState, useId } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Card, Button, Icon } from "@rneui/themed";
import { Video, AVPlaybackStatus } from 'expo-av';
import { getAllVideos } from '../../components/FirebaseProvider';



const videos = [
    // "https://firebasestorage.googleapis.com/v0/b/better-office-stagging.appspot.com/o/videos%2FL1vM5YLV0MtlVF7urteL.mov?alt=media&token=1664984f-753f-4a94-be4d-45dd9016eee1",
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    // "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    // "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    // "https://firebasestorage.googleapis.com/v0/b/singing-app-f3e35.appspot.com/o/04a1bc0eb98c429ba37b28ddc3f55189.MOV?alt=media&token=bc4466bd-07ed-463a-9cbc-d236114fcf53",
    // "https://firebasestorage.googleapis.com/v0/b/singing-app-f3e35.appspot.com/o/0b004fc0097a415d87e69277934cb3fd.MOV?alt=media&token=8b00f737-a89a-41a1-b97d-e57bea8518b7",
    // "https://firebasestorage.googleapis.com/v0/b/singing-app-f3e35.appspot.com/o/3ae91185af0a4b30b47c9715c5701256.MOV?alt=media&token=dd57d163-83ec-496d-bb28-e39967ca349d"
]

export default function Feed() {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    useEffect(()=>{
        async function test(){
            await getAllVideos()
        }

        
        test()
    },[])

    return (

        <ScrollView contentContainerStyle={styles.container}>
            {videos.map((uri, index) => {
                return <View key={useId}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri,
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <View style={styles.voteContainer}>
                        <Button title="Bad" buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }} />
                        <Button title="Good" buttonStyle={{
                            backgroundColor: 'rgba(111, 202, 186, 1)',
                            borderRadius: 5,
                        }} />
                    </View>
                </View>
            })}
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    videoContainer: {
        // flex: 1
        display: 'flex'
    },
    video: {
        width: 400,
        height: 700
        // flex: 1
    },
    voteContainer: {
        background: 'none',
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});


/**
 * Todo in this screen
 * Do 100 % width height on videos
 * Make votecontainer transparent
 * Do autoplay on video view
 */