public with sharing class AccountServiceController {
    @AuraEnabled
    public static string getAllAccounts(){
        try {
            List<Account> accounts = [SELECT Id, Name, Phone, Website FROM Account limit 10];
            return JSON.serialize(accounts);    
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}