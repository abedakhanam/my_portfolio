const publications = [
  {
    Name: "Classification of acute myeloid leukemia using convolutional neural network",
    Link: "https://ieeexplore.ieee.org/document/10269178",
    Abstract:
      "Acute myeloid leukemia is a life-threatening disease of white blood cells. It is a cancer of the blood and bone marrow. AML is considered 'acute' by physicians because the disease can progress rapidly. It is the most common type of acute leukemia in adults. The diagnosis of AML is done by a hematologist, which is time-consuming and more error-prone. Computer-aided diagnosis is more efficient and detects malignant cells more accurately. To classify and detect subtypes of this disease in an automated manner, we have proposed a convolutional neural network ANCOM, that can identify all subtypes of acute myeloid leukemia as well as healthy leukocytes. The experimental analysis of our study shows that the proposed algorithm provides better results for blast cell detection. We have used a public dataset from Cancer Imaging Archive to train our model. It has fifteen classes and a severe class imbalance problem. We have used random sampling techniques and data augmentation to balance the dataset. The model achieved an overall accuracy of 91.7% for detection and 92.5% for classification on multi-class classification. For binary classification, whether a white blood cell is malignant or not, it got 95% and 95.45% for the said dataset. A comparative analysis with VGG16, Resnet50, and Inception V3 was also done. Our model has achieved better accuracy without any need for segmentation of the microscopic images.",
  },
];

export default publications;
