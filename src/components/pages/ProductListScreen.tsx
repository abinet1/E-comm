import React, { useState, useCallback, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Text } from '../atoms';
import ProductList from '../organisms/ProductList';
import { addProduct, deleteProduct, editProduct } from '../../redux/slices/productSlice';
import { ThemeContext } from '../../../providers';
import { RootState } from '../../redux/store/store';

const ProductListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const handleAddProduct = useCallback((name: string, price: string) => {
    if (name && price) {
      dispatch(addProduct({ name, price: parseFloat(price) }));
    } else {
      Alert.alert('Error', 'Please fill in both the name and price fields');
    }
  }, [dispatch]);

  const handleDeleteProduct = useCallback(
    (id: string) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  const handleEditProduct = useCallback(
    (id: string, name: string, price: number) => {
      dispatch(editProduct({id, name, price}));
    },
    [dispatch]
  );

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.base}]}>
      <ProductList onDelete={handleDeleteProduct} onAdd={handleAddProduct} onEdit={handleEditProduct}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ProductListScreen;