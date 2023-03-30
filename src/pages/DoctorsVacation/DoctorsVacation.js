import React from 'react'








const DoctorsVacation = () => {
let docotrsvacations = [
{
doctor:'أحمد فتحي',
fromdate:'	02/10/2022',
todate:'31/12/2022'

},
{
doctor:'منى إبراهيم',
fromdate:'03/12/2022	',
todate:'17/12/2022'

},
{
doctor:'حازم عيد',
fromdate:'04/01/2023',
todate:'04/01/2023'

},
{
doctor:'رغدة يحيى',
fromdate:'04/10/2022	',
todate:'31/12/2022'

},
{
doctor:'محمد حسن',
fromdate:'04/12/2022	',
todate:'17/12/2022'

},
{
doctor:'مها حمدي',
fromdate:'04/12/2022',
todate:'17/12/2022'

},
{
doctor:'أحمد فتحي',
fromdate:'04/12/2022	',
todate:'17/12/2022'

},
{
doctor:'راندا إبراهيم',
fromdate:'04/12/2022	',
todate:'17/12/2022'

},
{
doctor:'فاطمة عبدالحميد',
fromdate:'04/12/2022	',
todate:'17/12/2022'

},
{
doctor:'مروة عبدالملك',
fromdate:'04/12/2022	',
todate:'17/12/2022'

},
{
doctor:'مريم إيهاب',
fromdate:'04/12/2022	',
todate:'17/12/2022'

},
{
doctor:'رجب العدلي',
fromdate:'14/12/2022	',
todate:'27/12/2022'

},
{
doctor:'شريف صبري',
fromdate:'02/12/2022	',
todate:'17/12/2022'

},
{
doctor:'نرمين أحمد',
fromdate:'04/12/2022	',
todate:'07/12/2022'

},
{
doctor:'هبة الله محمود',
fromdate:'03/12/2022	',
todate:'19/12/2022'

},
{
doctor:'سامر سمير',
fromdate:'09/12/2022	',
todate:'30/12/2022'

},
{
doctor:'تامر سيد',
fromdate:'06/12/2022	',
todate:'17/12/2022'

},
{
doctor:'محمد حسن',
fromdate:'01/12/2022	',
todate:'17/12/2022'

},
{
doctor:'مروة عبدالملك',
fromdate:'12/12/2022	',
todate:'17/12/2022'

},
{
doctor:'مريم إيهاب',
fromdate:'20/12/2022	',
todate:'27/12/2022'

},



]


  return (
    <div className='mt-5'>
        <div className='container'>
<div className='doc-table  table-responsive'>
     <h1 className=' mb-4'> إجازات الأطباء</h1>  
<table  className={docotrsvacations.length ? "table" : "d-none"}>
  <thead>
    <tr className='doc'>
      <th scope="col">#</th>
      <th scope="col">الطبيب</th>
      <th scope="col">من تاريخ</th>
      <th scope="col">إلى تاريخ</th>
      
    </tr>
  </thead>
  <tbody>
      {docotrsvacations.map((element,i)=>(
    <tr key={i}>
      <th scope="row" className='doc' >{i+1}</th>
      <td>{element.doctor} </td>
      <td>{element.fromdate} </td>
      <td>{element.todate} </td>
      
    </tr>
   
     ))}
  </tbody>
</table>
</div>

</div>
    </div>
  )
}

export default DoctorsVacation