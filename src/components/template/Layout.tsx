import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Input, Button, Text } from '../atoms';
import ProductList from '../organisms/ProductList';
import { addProduct, deleteProduct } from '../../redux/slices/productSlice';

const ProductListScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = useCallback(() => {
    if (name && price) {
      dispatch(addProduct({ name, price: parseFloat(price) }));
      setName('');
      setPrice('');
    } else {
      Alert.alert('Error', 'Please fill in both the name and price fields');
    }
  }, [name, price, dispatch]);

  const handleDeleteProduct = useCallback(
    (id: string) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <ProductList onDelete={handleDeleteProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});

export default ProductListScreen;