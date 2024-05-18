import React,{useContext, useEffect, Fragment, useState} from "react"; 
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Box, FormControl, HStack, NativeBaseProvider, Input } from "native-base";
import {Button, Text, TextInput, Card} from "react-native-paper";

import CarContext from "../../context/car/carContext";
import firebase from "../firebase";
