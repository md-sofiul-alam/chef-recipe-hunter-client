import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Blog = ({ blog }) => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });
    const { title, answer } = blog;
    return (
        <div className='col-sm-12 col-md-12 mb-5'>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            <Card>
                                <Card.Header as="h5">{title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {answer}
                                    </Card.Text>
                                    <Button variant="primary">Read Full Blog</Button>
                                </Card.Body>
                            </Card>
                        </Text>
                    </View>
                </Page>
            </Document>
        </div>
    );
};

export default Blog;