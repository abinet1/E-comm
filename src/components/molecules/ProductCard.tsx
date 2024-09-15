import React, { useCallback, useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Product } from "../../redux/slices/productSlice";
import { ThemeContext } from "../../../providers";
import { Button, Input, Text } from "../atoms";
import { color } from "../../../themeConfig";
import Modal from "./Modal";

interface ProductCardProps {
  product: Product;
  onDelete: () => void;
  onEdit:  () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete, onEdit }) => {
  const { theme } = useContext(ThemeContext);  
  
  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteModal = () => {
    setShowDelete(priv=>!priv);
  }

  return (
    <View style={[styles.card, { backgroundColor: theme.baseShade[0], shadowColor: theme.baseShade[0], }]}>
      <Image source={{uri: product?.image}} style={[styles.cardImage, ]}/>
      <View style={[styles.cardBody,]}>
        <Text variant="h4" numberOfLines={1}>{product.name }</Text>
        <Text variant="h5" numberOfLines={1} style={{ color: theme.textShade[0] }}>
          ${product.price && product.price}
        </Text>
        <View style={styles.cardAction}>
          <Button variant={'primary'} size='sm' title="Edit" styleProps={{width: '45%', height: 40}} onPress={onEdit} />
          <Button variant={'danger'} size='sm' title="Delete" styleProps={{width: '45%', height: 40}} onPress={handleDeleteModal} />
        </View>
      </View>
      <Modal
        title='Delete Product'
        content='Are you sure you want to delete this product?'
        onClose={handleDeleteModal}
        visible={showDelete}
        onSubmit={onDelete}
        variant='delete'
        primaryActionTitle='Delete'
        secondaryActionTitle='Cancel'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: '100%'
  },
  cardImage:{
    width: 80,
    borderTopLeftRadius: 5,
    backgroundColor: 'red',
    borderBottomLeftRadius: 5, 
  },
  cardBody: {
    width: 200,
  },
  cardAction: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default ProductCard;
