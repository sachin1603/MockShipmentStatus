# MockShipmentStatus
Merz Aesthetics Customer Service representatives must quickly get the updated status of a customer shipment. When viewing the standard Shipment page in Salesforce, the rep wants to be able to view a Lightning Web Component that displays the latest status of the Shipment based on the tracking number of the Shipment record.

Apex class named "MockShippingStatusService" which serves as a mock service for retrieving the status of a shipment based on a tracking number. The class contains the following key components:
A private method named "getShippingStatus" that takes a tracking number as input and returns the shipment status. If the tracking number is null, the method returns an error message stating "Error - Must provide tracking number". Otherwise, it returns "Shipped- On Time".
An HTTP GET method named "doGet" annotated with "@HttpGet" for handling external REST calls. This method retrieves the tracking number from the REST request parameters and calls the "getShippingStatus" method to obtain the shipment status.
An AuraEnabled method named "getShippingStatusLwc" annotated with "@AuraEnabled(cacheable=true)" for handling internal Lightning web component (LWC) calls. This method also calls the "getShippingStatus" method to fetch the shipment status based on the provided tracking number.
Overall, this class acts as a service for retrieving shipment status based on a tracking number, providing functionality for both external REST calls and internal Lightning web component calls.




