import React ,{useState} from 'react'
import './departments.css'



const Departments = () => {

let departemnts = [
    {
name:'جراحة المسالك البولية',
img:'https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_42548065_original-400x400.jpg',
defination:'غالبية الأمراض التي يتم معالجتها من قبل أخصائي المسالك البولية هي الأمراض السرطانية مثل سرطان البروتستات, المثانة, الكليتين, الخصيتين, القضيب. كذلك أمراض الحصى مثل حصيات الكلى وحصيات المثانة والتي تعتبر ضمن النطاق الطبي لهذا الإختصاص. بالإضافة لذلك يختص طبيب المسالك البولية في ضعف الإنتصاب وسلس البول.',




    },
    {
name:'طب القلب',
img:'https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/06/Depositphotos_24648537_original-400x400.jpg',
defination:'جراحة القلب (التي تشمل القلب والأوعية الدموية الكبرى) وجراحة الصدر (التي تشمل الرئتين وأي أعضاء أخرى داخل القفص الصدري) هي تخصصات جراحية مستقلة، ما عدا في الولايات المتحدة الأمريكية والمملكة المتحدة وأستراليا ونيوزيلندا حيث يتم دمجهم معا في تخصص واحد، وهذا يجعل الجراح المتدرب في تخصص جراحة القلب والصدر يمتلك خبرة أوسع في المجالين قبل أن يتخصص في إحداهما.',




    },
    {
name:'طب الأسنان',
img:'https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/02/Depositphotos_5711983_original-400x400.jpg',
defination:'طب الأسنان (بالإنجليزية: Dentistry)‏، المعروف أيضًا باسم طب الفم، هو فرع من فروع الطب يتكون من دراسة وتشخيص ووقاية وعلاج أمراض واضطرابات وحالات تجويف الفم، عادةً في الأسنان (تطور وترتيب الأسنان) وكذلك الغشاء المخاطي الفموي والتركيبات والأنسجة المجاورة والمرتبطة بها، خاصة في منطقة الوجه والفكين. يشمل مجال طب الأسنان بالإضافة إلى جوانب أخرى من المركب القحفي الوجهي بما في ذلك المفصل الصدغي الفكي وغيرها من الهياكل الداعمة والعضلية والليمفاوية والعصبية والأوعية الدموية والتشريحية. يسمى الممارس طبيب أسنان.',




    },
    {
name:'طبيب الأعصاب',
img:'https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_42539851_department.jpg',
defination:'طبيب الأعصاب هو طبيب متخصص في علاج أمراض الجهاز العصبي بأقسامه: الدماغ، والحبل الشوكي، والأعصاب المحيطية. ويعمل أخصائي الأمراض العصبية على تشخيص الأمراض التي تصيب تلك الأعضاء وعلاجها، ولا يجري أخصائي الأمراض العصبية الجراحة. يتوجب على أخصائي الأمراض العصبية إتمام دراسة ما يلي: التخرج من كلية الطب.'





    },
    {
name:'اخصائي اطفال',
img:'https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_42548065_original-400x400.jpg',
defination:'طبيب مختص في تشخيص وعلاج أمراض الطفولة ، من الولادة و حتى سن المراهقة. ولذلك فهو يشمل مختلف أوجه التطور والصحة البدنية، والنفسية للطفل، بما في ذلك معالجة الأمراض، والإعاقات والأمراض المختلفة.'
,




    },
    {
name:'الأشعة السينية',
img:'https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_80150830_original-400x400.jpg',
defination:'علم الأشعة أو طب الأشعة هو أحد فروع الطب الذي يستخدم تقنيات التصوير الطبي وذلك بهدف وضع التشخيص الملائم وفي بعض الأحيان يتطرق إلى العلاج. عند بداية ظهور هذا العلم اقتصر على استخدام الأجهزة المصدرة للأشعة السينية (X-Ray) وذلك في تقنيات التصوير، أما في الوقت الحاضر فقد توسع هذا العلم ليشمل أجهزة أخرى مثل التصوير بالأمواج فوق الصوتية والتصوير الطبقي المحوري، والتصوير بالرنين المغناطيسي.',




    },
    {
name:'طب الرئة',
img:'https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_10069934_original-400x400.jpg',
defination:'          طب الصدرية يعتبر فرع من فروع طب الباطنية، وهو أيضا مرتبط بطب العناية المركزة. طب الصدرية عادة مايضم علاج مرضى خاضعين لإجراءات الإنعاش الحيوي والتهوية الميكانيكية. أطباء الصدرية دربوا خصيصا للتعامل مع أمراض الصدر، بالتحديد ذات الرئة، الربو، مرض السل، داء الانسداد الرئوي المزمن، وأمراض الصدر المعدية المعقدة.           '




    },



]

const [isactive, setisactive] = useState(0)
  return (
    <div className='departments'>
<div className='container border pt-3'>
<div className='row'>
<div className='col-lg-3 col-md-12 col-sm-12 mb-5'>
<div>
<h1 className='mb-4 fs-4 border p-3 pe-1'>التخصصات المتاحة</h1>
<div >
{departemnts.map((dep , i) =>   (
<p className={`${i % 2 === 0 ? 'even dep p-3 pe-4 m-0' : 'odd dep p-3 pe-4 m-0'} ${i === isactive ? 'active' : ''}`} key={i}
onClick={() => setisactive(i)}

>{dep.name}</p>



))}
</div>

</div>
</div>

<div className='col-lg-9 col-lg-0 col-lg-0'>


<div className='row'>
<div className='col-lg-8 col-md-8 col-sm-8'>
<div className='d-flex flex-column '>
<h3>{departemnts[isactive].name}</h3>
<p className='def mt-5'>{departemnts[isactive].defination}</p>
</div>

</div>
<div className='col-lg-4 col-md-4 col-sm-4'>

<img className='w-100' src={departemnts[isactive].img} alt={departemnts[0].name} />

</div>
</div>
</div>




</div>


</div>



    </div>
  )
}

export default Departments