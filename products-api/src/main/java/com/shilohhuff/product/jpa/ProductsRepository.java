package com.shilohhuff.product.jpa;

import com.shilohhuff.product.jpa.entities.Product;
import org.springframework.data.repository.CrudRepository;

/**
 * Spring data implaments this interface, allowing all the data to be retrieved from the MySQL database.
 *
 * You can find the connection details for the database in the application.properties files.
 */
public interface ProductsRepository extends CrudRepository<Product, Integer> {

}