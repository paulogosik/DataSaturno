import { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,
    Linking
}
    from 'react-native';

export function CardNewsTech() {
    const [news, setNews] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const Icon = require('react-native-vector-icons/Feather').default;

    function dateLastWeek() {
        const today = new Date();
        const lastWeek = new Date();
        lastWeek.setDate(today.getDate() - 7);

        const year = lastWeek.getFullYear();
        const month = String(lastWeek.getMonth() + 1).padStart(2, '0');
        const day = String(lastWeek.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    function dateToday() {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        const today = dateToday();
        const lastWeek = dateLastWeek();

        async function fetchNews() {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=Technology OR IA OR Tech OR Tecnologia OR TI&language=pt&sortBy=relevancy&from=${lastWeek}&to=${today}&apiKey=eca7fa69ac7848efbb4f0f80149ec156`
                );
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.error('Erro ao buscar a notícia:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    if (loading) {
        return <ActivityIndicator size="small" color="#8A2BE2" />;
    }

    if (!news || news.status == 'error') {
        return <Text style={styles.titlePage}>Erro ao carregar notícias</Text>;
    }

    return (
        <View style={styles.containerNews}>

            <FlatList
                scrollEnabled={false}
                data={news}
                renderItem={({ item }) => (

                    <View>
                        <View style={styles.card}>
                            <Image
                                source={{ uri: `${item.urlToImage}` }}
                                style={styles.image}
                            />
                            <View style={styles.contentNews}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.autor}>Autor: {item.author}</Text>
                                <Text style={styles.fonte}>Fonte: {item.source.name}</Text>
                                <Text style={styles.descricao}>{item.description}</Text>

                                <View style={styles.containerButton}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => Linking.openURL(`${item.url}`)}
                                    >
                                        <View style={styles.lineContent}>
                                            <Text style={styles.textButton}>Ver notícia completa  </Text>
                                            <Icon name="external-link" size={18} color={'#d3d3d3'} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <View style={styles.footer}></View>
                }
            />
        </View >
    );
}

const styles = StyleSheet.create({
    containerNews: {
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#1c1c1c',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#0f0f0f',
        borderRadius: 12,
        alignSelf: 'center',
        marginBottom: 15,
        width: '95%',
    },
    contentNews: {
        padding: 16
    },
    lineContent: {
        flexDirection: 'row',
    },
    titlePage: {
        color: '#D3D3D3',
        fontSize: 30,
        fontWeight: '800',
        alignSelf: 'center',
    },
    title: {
        color: '#d3d3d3',
        fontSize: 16,
        fontWeight: '800',
    },
    descricao: {
        color: '#d3d3d3',
        marginTop: 15,
        fontSize: 16,
    },
    autor: {
        color: '#aaa',
        fontSize: 12,
    },
    fonte: {
        color: '#aaa',
        fontSize: 12,
    },
    image: {
        width: '100%',
        height: 90,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    containerButton: {
        marginTop: 20,
    },
    textButton: {
        color: '#d3d3d3',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '800',
    },
    button: {
        backgroundColor: '#6E4EE3',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        padding: 8,
        borderRadius: 8,
    },
    footer: {
        marginTop: 600
    },
});