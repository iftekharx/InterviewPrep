public class OperatingSystemFactory {

    public OS getInstance(String str){

      if(str.equals("android")){
          return new Android();
      }else if (str.equals("ios")){
          return new Ios();
      }else{
          return null;
      }



    }
}
