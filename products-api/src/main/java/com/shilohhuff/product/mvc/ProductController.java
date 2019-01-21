package com.shilohhuff.product.mvc;

import java.util.concurrent.atomic.AtomicLong;

import com.shilohhuff.product.jpa.ProductsRepository;
import com.shilohhuff.product.jpa.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

/**
 * This is a very simple rest service to expose the data in a MySQL database.
 * Spring-data handles pulling all the data and practically implementing all the guts of the rest service.
 *
 * If the scope of this application grew, this is where all the important backend logic would take place. (Security, buisness rules, etc)
 *
 * In a real world scenario, endpoints to add and remove products would most likely be added to manage the data in the database, but that is out of scope for now.
 * If the amount of data starts to get very large, pagenation and query parameters could be implemented for ease of use.
 *
 * You can find the connection details for the database in the application.properties files.
 */
public class ProductController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @Autowired
    private ProductsRepository productsRepository;

    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:9000"})
    @RequestMapping("/products")
    public Iterable<Product> getAllProducts(@RequestParam(value="name", defaultValue="World") String name) {
        return productsRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:9000"})
    @RequestMapping("/products/{productId}")
    public Product getProductDetails(@PathVariable Integer productId) {
        return productsRepository.findById(productId).get();
    }
}