# [**BuyCars.com**](https://buy-cars-attryb-ochre.vercel.app) Website Flow 



## Table of Contents

- [Introduction](#introduction)
- [User Authentication](#user-authentication)
- [Dealer Dashboard](#dealer-dashboard)
  - [Add Car Listing](#add-car-listing)
  - [Manage Car Listings](#manage-car-listings)
- [Car Search and Filters](#car-search-and-filters)
- [API Documentation](#api-documentation)
- [Authentication](#autentication)
- [Hashing](#hashing)

## Introduction

This README outlines the flow of the [**BuyCars.com**](https://buy-cars-attryb-ochre.vercel.app) website, providing an overview of its features and functionalities.

## User Authentication

- Users are required to sign up and log in to access the website.
- Authentication ensures that dealers can manage their car listings, and buyers can browse and make purchases securely.

## Dealer Dashboard

- Upon logging in, dealers are directed to their dashboard, where they can manage their car listings.

### Add Car Listing

- Dealers can add second-hand car listings with detailed specifications.
- The car details page includes an image, title, and description.
- Dealers provide information such as price, colors, mileage, and additional details about the car.

### Manage Car Listings

- Dealers can view a list of all their second-hand car listings.
- They have the option to edit the details of any listing.
- Dealers can also delete multiple listings if needed.

## Car Search and Filters

- Users, both buyers, and dealers can search for cars on [**BuyCars.com**](https://buy-cars-attryb-ochre.vercel.app)..
- The search functionality allows users to find specific car models, years, or other criteria.
- Filters are available to refine search results based on price, colors, and mileage.
- Search results display relevant car listings with detailed information.

## API Documentation

- Developers can access the API documentation for [**BuyCars.com**](https://buy-cars-attryb-ochre.vercel.app).
- API endpoints include:
  - "/user/login" - Login (post)
  - "/user/signup" - Signup (post)
  - "/marketPlace" - search, add, edit, delete cars.(get,post, put, delete)
  - "/oemspec" - search, add, edit, delete OEM.(get,post, put, delete)

## Autentication

- Used JSON web token(JWT) for authentication and also information exchange. The token is mainly composed of headers.

## Hashing

- Bcrypt used to hash and store passwords. Its major benefits include: Slow runtime. Bcrypt is a slow-functioning algorithm that takes time to create password hashes and requires time to decrypt them, significantly slowing hacker attempts to break the bcrypt hash

This README provides an overview of the [**BuyCars.com**](https://buy-cars-attryb-ochre.vercel.app) website's flow, including user authentication, the dealer dashboard, car search and filters, and API documentation.


