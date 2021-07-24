import { AiOutlineHeart } from 'react-icons/ai';

export default function Comment() {
  return (
    <div>
      <div>
        <h2>Comments</h2>
        <span>1</span>
      </div>
      <ul>
        <li>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <div>
              <span>dngwoodo</span> ﹒<span>5 min ago</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos corrupti obcaecati numquam nostrum nisi possimus
              beatae eaque veniam explicabo ea consequuntur, recusandae labore
              illo, eos quidem reiciendis aperiam! Reprehenderit, sunt!
            </p>
            <div>
              <span>Reply</span>
              <span>Like?</span>
              <div>
                <AiOutlineHeart />
                <span>24</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
