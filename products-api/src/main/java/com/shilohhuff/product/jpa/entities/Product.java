package com.shilohhuff.product.jpa.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;


/**
 * Spring data / jpa leverages this object to map over the schema of the database.
 */
@Entity // This tells Hibernate to make a table out of this class
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String description;
    private Date lastSold;
    private int shelfLife;
    private String department;
    private Double price;
    private String unit;
    private int unitMultiple;
    private Double unitCost;

}