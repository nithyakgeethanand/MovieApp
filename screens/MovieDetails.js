import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query';
import { getMoviesById } from '../queries/movies';
import LoadingElement from '../components/LoadingElement';
import ErrorElement from '../components/ErrorElement';
import movie_poster from '../assets/movie_poster.png';
import { screenWidth, screenHeight } from '../utils/constants';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/colors';
import fonts from '../utils/fonts';


const MovieDetails = ({ route }) => {

    // Movie ID
    const { id } = route.params;

    // Get movie details by ID
    const { data, isLoading, isError } = useQuery("getMovieDetails", () => getMoviesById(id));

    if (isLoading) {
        return <LoadingElement />;
    }

    if (isError) {
        return <ErrorElement />;
    }

    const onPressKnowMoreButton = (url) => {
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <Image
                source={movie_poster}
                style={styles.moviePoster}
            />
            <Text style={styles.movieDetailHeader}>{data.movie}</Text>
            <View style={styles.ratingContainer}>
                <AntDesign name="star" size={50} color={colors.ratingStar} />
                <Text style={styles.movieDetailRating}>{data.rating}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => onPressKnowMoreButton(data.imdb_url)}
            >
                <Text style={styles.buttonText}>Know more</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    moviePoster: {
        width: screenWidth - 50,
        height: screenHeight / 3,
        alignContent: 'center',
        borderRadius: 10
    },
    button: {
        backgroundColor: colors.button,
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        fontSize: fonts.small,
        padding:10
    },
    movieDetailHeader: {
        fontSize: fonts.big,
        fontWeight: '500',
        marginTop: 10,
        textAlign: 'center',
        padding: 20
    },
    movieDetailRating: {
        fontSize: fonts.big,
        marginLeft: 5,
        fontWeight: '500'
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5
    },

})