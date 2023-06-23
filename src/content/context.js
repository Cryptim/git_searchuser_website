import React from "react";
import { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepo from "./mockData.js/mockRepo";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
const rootUrl = "https://api.github.com";
