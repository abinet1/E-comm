import React, { useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { Header, Modal, ProductCard } from '../molecules';
import { Product } from '../../redux/slices/productSlice';
import { Button, Input, Text } from '../atoms';
import { PlusIcon } from '../../../assets';

interface ProductListProps {
  onDelete: (id: string) => void;
  onAdd: (name: string, price: string) => void;
  onEdit: (id: string, name: string, price: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onDelete, onAdd, onEdit}) => {
  const products = useSelector((state: RootState) => state.products.products);
  
  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleShowModal = () => {
    if(show){
      setEditProduct(null);
      setName('');
      setPrice('');
    }
    setShow(prev => !prev);
    
  };

  const handleEditModal = (product: Product) => {
    setEditProduct(product);
    setName(product.name);
    setPrice(product.price.toString());
    setShow(true);
  };

  const handleSubmit = useCallback(() => {
    if (editProduct) {
      onEdit(editProduct.id, name, parseFloat(price));
    } else {
      onAdd(name, price);
    }
    setName('');
    setPrice('');
    setEditProduct(null);
    handleShowModal();
  }, [name, price, onAdd, onEdit, editProduct]);

  const renderedProducts = useMemo(
    () => {
    return (
      <FlatList
        style={{paddingHorizontal : 20}}
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard 
            key={index} 
            product={item} 
            onDelete={()=>onDelete(item.id)} 
            onEdit={()=>handleEditModal(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }, [products]);

  return (
    <View style={{flex: 1}} >
      <Header />
      <Text variant='title' style={{paddingHorizontal: 20, paddingVertical: 20}}>
        Active Product
      </Text>
      {renderedProducts}
      <View style={{padding: 20, }}>
        <Button title='Add Product' variant='primary' onPress={handleShowModal} size='md' leftIcon={<PlusIcon stroke={'#ffffff'} />}/>
      </View>
      <Modal 
        title={editProduct ? 'Edit Product' : 'Add Product'}
        onClose={handleShowModal}
        visible={show}
        onSubmit={handleSubmit}
        modalBody={
          <View style={{width: '100%'}}>
            <Input
              value={name}
              onChangeText={setName}
              placeholder="Product Name"
            />
            <Input
              value={price}
              onChangeText={setPrice}
              placeholder="Product Price"
              keyboardType="numeric"
            />
          </View>
        }
        variant={editProduct ? 'edit':'add'}
        primaryActionTitle={editProduct ? 'Edit':'Add'}
        secondaryActionTitle='Cancel'
      />
    </View>
  );
};

export default ProductList;
