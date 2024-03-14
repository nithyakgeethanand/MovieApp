import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react'
import { useQuery } from 'react-query';
import { getAllMovies } from '../queries/movies';
import LoadingElement from '../components/LoadingElement';
import movie_poster from '../assets/movie_poster.png';

const Home = () => {
    const { data, isLoading, isError } = useQuery('movies', getAllMovies);

    if (isLoading) {
        return <LoadingElement />;
    }

    if (isError) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Error fetching data</Text>
            </View>
        );
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatListConatiner}>
                <Image
                    source={movie_poster}
                    style={styles.moviePoster}
                />
                <View style={styles.movieDesc}>
                    <Text style={styles.movieHeader}>{item.movie}</Text>
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    flatListConatiner: {
        backgroundColor: '#F2F1F0',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
    moviePoster: {
        width: 100, 
        height: 100, 
        alignContent: 'center',
        borderRadius: 10
    },
    movieHeader: {
        fontSize: 20,
        fontWeight:'500',
        
    },
    movieDesc: {
        padding: 20,
        width: 250
    },
    rating: {
        fontSize: 15,
        paddingTop : 30
    }
    
});
