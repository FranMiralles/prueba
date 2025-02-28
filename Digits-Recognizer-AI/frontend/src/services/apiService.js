import axios from 'axios';

export const trainDecisionTree = async (test_size, random_state) => {
    const url = 'http://localhost:5000/api/trainDecisionTree';

    let params = {
        test_size: test_size,
        random_state: random_state,
    };

    try {
        const response = await axios.get(url, { params });
        return response.data;

    } catch (error) {
        return "Error"
    }
};

export const trainRandomForest = async (test_size, random_state, n_estimators) => {
    const url = 'http://localhost:5000/api/trainRandomForest';

    let params = {
        test_size: test_size,
        random_state: random_state,
        n_estimators: n_estimators,
    };

    try {
        const response = await axios.get(url, { params });
        return response.data;

    } catch (error) {
        return "Error"
    }
};

export const trainAll = async (test_size, random_state, n_estimators) => {
    const url = 'http://localhost:5000/api/trainAll';

    let params = {
        test_size: test_size,
        random_state: random_state,
        n_estimators: n_estimators,
    };

    try {
        const response = await axios.get(url, { params });
        return response.data;

    } catch (error) {
        return "Error"
    }
};

export const sendImage = async (image) => {
    const url = 'http://localhost:5000/api/image';

    let params = {
        image: image,
    };

    try {
        const response = await axios.get(url, { params });
        console.log(response.data)
        return response.data;

    } catch (error) {
        return "Error"
    }
};