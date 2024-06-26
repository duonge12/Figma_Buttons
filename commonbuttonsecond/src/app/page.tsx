
import { ButtonConfig, ButtonProps, EButtonTheme, ESize } from "@/components/buttons/commonbuttons";
import { defaultPrimaryDarkDefault_arr, defaultPrimaryWhiteDefault_arr, defaultSecondaryDarkDefault_arr, defaultTextDarkDefault_arr, disablePrimaryDarkDefault_arr, disablePrimaryWhiteDefault_arr, disableSecondaryDarkDefault_arr, disableTextDarkDefault_arr, processingPrimaryDarkDefault_arr, processingPrimaryWhiteDefault_arr, processingSecondaryDarkDefault_arr, processingTextDarkDefault_arr } from "@/data/predata";
import Image from "next/image";
// import { ButtonConfig, EButtonTheme, ESize} from "../../Components/Buttons/commonbuttons";


export default function Home() {
  // buttonType?: string
  // size?: string
  // isDisable?: boolean
  // content?: string
  // leftIcon?: ReactNode
  // rightIcon?: ReactNode
  // loading?:ReactNode
  type Loop = (arr: ButtonProps[]) => JSX.Element[];

  const loop: Loop = (arr) => {
    return arr.map((item, index) => (
      <td  key={index}>
        <ButtonConfig {...item} />
      </td>
    ));
  };
  
  return (
    <div className="flex flex-col items-center justify-between p-24">
     <h1 className="text-3xl font-bold ">PRIMARY WHITE XL</h1>
     <table >
        <tr>
          <th></th> <th>Without icon</th><th>Left icon</th><th>Right icon</th><th>Icon</th>
        </tr>
        <tr>
          <th>Click</th> 
          {loop(defaultPrimaryWhiteDefault_arr)}
        </tr>
        <tr>
          <th>Disable</th> 
          {loop(disablePrimaryWhiteDefault_arr)}
        </tr>
        <tr>
          <th>Processing</th> 
          {loop(processingPrimaryWhiteDefault_arr)}
        </tr>
       
        
     </table>

     <h1 className="text-3xl font-bold">PRIMARY Dark XL</h1>
     <table >
        <tr>
          <th></th> <th>Without icon</th><th>Left icon</th><th>Right icon</th><th>Icon</th>
        </tr>
        <tr>
          <th>Click</th> 
          {loop(defaultPrimaryDarkDefault_arr)}
        </tr>
        <tr>
          <th>Disable</th> 
          {loop(disablePrimaryDarkDefault_arr)}
        </tr>
        <tr>
          <th>Processing</th> 
          {loop(processingPrimaryDarkDefault_arr)}
        </tr>
       
        
     </table>
     <h1 className="text-3xl font-bold">Secondary dark XL</h1>
     <table >
        <tr>
          <th></th> <th>Without icon</th><th>Left icon</th><th>Right icon</th><th>Icon</th>
        </tr>
        <tr>
          <th>Click</th> 
          {loop(defaultSecondaryDarkDefault_arr)}
        </tr>
        <tr>
          <th>Disable</th> 
          {loop(disableSecondaryDarkDefault_arr)}
        </tr>
        <tr>
          <th>Processing</th> 
          {loop(processingSecondaryDarkDefault_arr)}
        </tr>
       
        
     </table>
     <h1 className="text-3xl font-bold">Text dark XL</h1>
     <table >
        <tr>
          <th></th> <th>Without icon</th><th>Left icon</th><th>Right icon</th><th>Icon</th>
        </tr>
        <tr>
          <th>Click</th> 
          {loop(defaultTextDarkDefault_arr)}
        </tr>
        <tr>
          <th>Disable</th> 
          {loop(disableTextDarkDefault_arr)}
        </tr>
        <tr>
          <th>Processing</th> 
          {loop(processingTextDarkDefault_arr)}
        </tr>
       
        
     </table>

     
    </div>
  );
}
